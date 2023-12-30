import asyncio
from azure.servicebus.aio import ServiceBusClient
from dotenv import dotenv_values
import pymongo
import json
from azure.communication.email import EmailClient
import base64
import io
from PIL import Image

env = dotenv_values(".env")

NAMESPACE_CONNECTION_STR = env["NAMESPACE_CONNECTION_STR"]
QUEUE_NAME = env["QUEUE_NAME"]
myclient = pymongo.MongoClient(env["COSMOS_KEY"])
mydb = myclient["cosmos-db-mongo_esame"]
email_client = EmailClient.from_connection_string(env["EMAIL_KEY"])


def sendEmail():
    message = {
        "content": {
            "subject": "New data Added to Reddiment",
            "plainText": "This is to advertise that new analysis/data has been added to Reddiment.",
        },
        "recipients": {
            "to": [
                {
                    "address": "roach_99@hotmail.it",
                    "displayName": "Customer Name",
                }
            ]
        },
        "senderAddress": env["SENDER_ADDRESS"],
    }
    return print(email_client.begin_send(message).result())


def process_dataset(data):
    chart_type = data.get("chart_type", "")
    dataset = data.get("dataset", [])

    if chart_type and dataset:
        mycol = mydb[chart_type]
        for item in dataset:
            x = mycol.insert_one(item)
            print("Data inserted into MongoDB: " + str(x.inserted_id))


async def run():
    print("run avviata")
    # create a Service Bus client using the connection string
    async with ServiceBusClient.from_connection_string(
        conn_str=NAMESPACE_CONNECTION_STR, logging_enable=True
    ) as servicebus_client:
        async with servicebus_client:
            # get the Queue Receiver object for the queue
            receiver = servicebus_client.get_queue_receiver(
                queue_name=QUEUE_NAME, max_lock_duration=1080
            )
            async with receiver:
                received_msgs = await receiver.receive_messages(
                    max_wait_time=300, max_message_count=200
                )
                mycol = mydb["dataset"]
                for msg in received_msgs:
                    try:
                        # Extract data from the message body (assuming it's JSON)
                        data = json.loads(str(msg))
                        chart_type = data.get("chart_type", "")
                        print("Received: " + chart_type)
                        if chart_type == "default":
                            pass
                        if "wordcloudimages" in chart_type:
                            mycol = mydb[chart_type.split(" ")[0]]
                        elif chart_type == "datasets":
                            process_dataset(data)
                        else:
                            mycol = mydb[chart_type]
                        x = mycol.insert_one(data)
                        print("Data inserted into MongoDB: " + str(x.inserted_id))

                        sendEmail()

                    except Exception as e:
                        print(f"Error processing message: {e}")

                    finally:
                        # Complete the message so that it is removed from the queue
                        await receiver.complete_message(msg)


# Run the event loop
asyncio.run(run())

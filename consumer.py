import asyncio
from azure.servicebus.aio import ServiceBusClient
from dotenv import dotenv_values
import pymongo
import json  # Added for converting message body to dictionary

env = dotenv_values(".env")

NAMESPACE_CONNECTION_STR = env["NAMESPACE_CONNECTION_STR"]
QUEUE_NAME = env["QUEUE_NAME"]
myclient = pymongo.MongoClient(env["COSMOS_KEY"])
mydb = myclient["cosmos-db-mongo_esame"]
mycol = mydb["data"]


async def run():
    print("run avviata")
    # create a Service Bus client using the connection string
    async with ServiceBusClient.from_connection_string(
        conn_str=NAMESPACE_CONNECTION_STR, logging_enable=True
    ) as servicebus_client:
        async with servicebus_client:
            # get the Queue Receiver object for the queue
            receiver = servicebus_client.get_queue_receiver(queue_name=QUEUE_NAME)
            async with receiver:
                received_msgs = await receiver.receive_messages(
                    max_wait_time=5, max_message_count=20
                )
                for msg in received_msgs:
                    print("Received: " + str(msg))
                    try:
                        # Extract data from the message body (assuming it's JSON)
                        data = json.loads(str(msg))

                        # Insert the data into MongoDB
                        x = mycol.insert_one(data)
                        print("Data inserted into MongoDB: " + str(x.inserted_id))

                        # Complete the message so that it is removed from the queue
                        await receiver.complete_message(msg)
                    except Exception as e:
                        print(f"Error processing message: {e}")
                        # Handle error as needed


asyncio.run(run())

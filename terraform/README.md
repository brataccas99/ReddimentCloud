# Azure

This folder contains some Terraform configurations for Azure<br>

You can find:

- Azure CosmosDB
- Azure Registry (ACR)
- Azure Service Bus (with a configured queue)
- Azure Communication Service

## How to run this configuration

Create a .tfvars file

After changing the values in your file, run the follwing commnands:

<code>terraform fmt</code>

<code>terraform init</code>

<code>terraform plan</code>

<code>terraform apply</code>

If you want to destory all the infrastructure that you created, run:

<code>terraform destory</code>

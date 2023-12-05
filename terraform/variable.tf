variable "resource_group_name" {
  type        = string
  description = "resource_group_name"
}

variable "resource_group_location" {
  type        = string
  description = "East US"
}

variable "cosmos_db_name" {
  type        = string
  description = "cosmos"
}

variable "cosmos_db_offer_type" {
  type        = string
  description = "Basic"
}

variable "cosmos_db_kind" {
  type        = string
  description = "MongoDB"
}

variable "cosmos_db_mongo_name" {
  type        = string
  description = "mongo"
}

variable "service_bus_namespace_name" {
  type        = string
  description = "service_bus"
}

variable "service_bus_queue_name" {
  type        = string
  description = "queue"
}
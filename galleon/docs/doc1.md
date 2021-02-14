---
id: doc1
title: Adapter Introduction
sidebar_label: Adapter Introduction
slug: /
---

The ServiceNow platform is a PaaS solution for IT service management. Tidal Workload Automation provides the means for integration with ServiceNow using the custom ServiceNow Adapter that communicates with a ServiceNow instance through its REST API.

The ServiceNow Adapter is just a functional connecting software layer that is not experienced directly but on UI level. It means that once the integration is made, you just use the Tidal Workload Automation Web Client to manage a bi-directional workflow between the two platforms.

## Typical Workflow

There are two possible workflows supported by the ServiceNow Adapter:

**TWA --> SN**  
The ServiceNow Adapter monitors the state of Tidal Workflow Automation for Events that are set to be specific conditions triggering particular Actions regarding a ServiceNow instance. Such Actions usually amount to creating, modifying, or resolving records (tickets) in ServiceNow.

**SN --> TWA**  
The opposite case, when creation, modification, or resolving of records (tickets) in ServiceNow triggers the indicated changes in Tidal Workload Automation.

---

## Prerequisites

General key points to keep in mind:

* A user must be authenticated (using basic authentication) in a ServiceNow account to make requests to a ServiceNow instance.
* A ServiceNow instance is accessed via `HTTP/HTTPS` protocol.
* A user must have the permission to access `Table API` (default access right).
* A user must have the role `snc_platform_rest_api_access` to make requests to that API.

---

## Date and Time Prerequisites

Upon creating Actions or Events, we frequently deal with date and time values for matching criteria or setting their current state.

To keep an error-free communication between the Tidal Workload Automation and ServiceNow platforms, you have to adhere to the following rules:

* **For Matching Criteria** — use the date and time formats supported in Tidal Workload Automation.

| Date Formats &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Time Formats |
| ------------ | :---------- |
| yyyy-MM-dd   | HH:mm:ss (24-hour) |
| MM/dd/yy     | HH.mm.ss (24-hour) |
| MM/dd/yyyy   | hh:mm:ss a (12-hour, AM/PM) |
| MM-dd-yyyy   | hh.mm.ss a (12-hour, AM/PM) |
| dd-MMM-yy    | |

* **For Setting Values** — keep both the date-time formats and time zones synchronized between the two platforms.

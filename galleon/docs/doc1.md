---
id: doc1
title: HTTP Connector
sidebar_label: Kelp Product Guide
slug: /
---

## Connector Overview

An HTTP connector is the building block that enables the communication of components by transferring data elements via the HTTP protocol.

In this guide, you can find a full spec of HTTP connector [capabilities](#connector-capabilities) along with the info on how to incorporate those capabilities into your schema. Also, you can find info on the HTTP connector [settings](#connector-settings).

Enjoy your ride.

## Connector Capabilities

The HTTP connector provides a complete set of standard capabilities implemented by means of input and output ports to tailor your RESTful application architecture to your custom needs.

### Input Ports

**url** `String`  
The **url** port helps you connect to the resource you'd like to communicate with. All you have to do is enter the resource's URL. A URL shows the whole path to the resource as in the following example:

```http
http://request.example.com/path/to/info
```

A URL usually contains both the base path and the end path in it:

  * The **base path** refers to the common path for the URL. In the example above, the base path is `http://request.example.com`.

  * The **end path** refers to the particular place of the URL. In the example above, the end path is `/path/to/info`.

Often enough, a URL's end path is to be added with *path parameters* and *query string parameters*. Those can be added as a JSON object via the **params** port.

---

**params** `JSON`  
The **params** port helps you provide either *path parameters* or *query string parameters* to be passed with the URL to specify your request. As you can see from the example

```http
http://api.example.com/path/to/info/{infoId}?key1=value1&key2=value2
```

  * The **path parameters** are part of the URL's end path. Path parameters are usually set off with curly braces. In the example above, the path parameter is `{infoId}`.

  * The **query string parameters** refer to the part of the URL after a question mark (`?`). In the query string, each parameter is listed one right after the other with an ampersand (`&`) separating them. In the example above, the query string parameters are `?key1=value1&key2=value2`.

The way parameters are to be added into the URL depends on the **Path parameter processing** setting selected for the HTTP connector:

  * **None**: Default. The parameters you'd like to pass with the endpoint are to be added as a query string to the URL indicated for the **url** port. To pass those parameters, incorporate a [**JSON const**](https://docs.kelp.app/data/components/constant/json/doc) component into your schema, specify those parameters as an array of `"key": "value"` pairs, and connect the component's **output** port to your HTTP connector's **params** input port.

  * **Path parameters**: Select this option to add path parameters into the URL indicated for the **url** port. Double-check the path parameters naming and order in the URL settings. To pass those parameters, incorporate a [**JSON const**](https://docs.kelp.app/data/components/constant/json/doc) component into your schema, specify those parameters as an array of `"key": "value"` pairs, and connect the component's **output** port to your HTTP connector's **params** input port. Path parameters defined in the URL will be replaced by the actual values from the **JSON const** component.

  * **Path RegExp**: Select this option to create a path specification that will be converted into a regular expression that matches conforming paths. In the URL settings, create a path specification using the [Path to RegExp](https://github.com/pillarjs/path-to-regexp#path-to-regexp) options. To pass parameter values for being processed by the specification created, incorporate a [**String const**](https://docs.kelp.app/data/components/constant/string/doc) component into your schema, specify those values, and connect the component's **output** port to your HTTP connector's **params** input port.

---

**data** `JSON, String`  
The **data** port helps you send parameters as a *request body*. Request bodies are used with the POST, PUT, and PATCH requests only, so don't forget to select the corresponding **Request Method** in your HTTP connector settings. Request bodies are usually sent in JSON format. Therefore, incorporate a [**JSON const**](https://docs.kelp.app/data/components/constant/json/doc) component into your schema, specify request body parameters as an array of `"key": "value"` pairs, and connect the component's **output** port to your HTTP connector's **data** input port.

---

**headers** `JSON`  
The **headers** port helps you send *header parameters*. Usually, those are the authorization parameters, such as API key, Basic Auth, etc. To pass header parameters, incorporate a [**JSON const**](https://docs.kelp.app/data/components/constant/json/doc) component into your schema, specify the necessary parameters as a `"key": "value"` pair, and connect the component's **output** port to your HTTP connector's **headers** input port.

---

**credentials** `JSON`  
The **credentials** port helps you provide an identity confirmation for authentication into a secured connection. Various authentication schemes, including *OAuth 2.0* and *OIDC*, are supported by the **credentials** port. To pass your credentials, incorporate a [**Credentials**](https://docs.kelp.app/data/components/credentials/configuration/doc/) component into your schema, set the necessary parameters, and connect the component's **output** port to your HTTP connector's **credentials** port.

:::note
As an additional safety measure, you can store your credentials in a secured vault, and refer to it in your apps.
:::

---

**trigger** `Boolean`  
The **trigger** port helps you add an event that will initiate your HTTP connector to perform the request configured. In other words, a trigger event starts an HTTP request. To use it, incorporate any trigger component into your schema (example: [**Card widget**](https://docs.kelp.app/widgets/icon/latest/doc)), and connect the component's **output** port to your HTTP connector's **trigger** port.

:::note
If no **trigger** port is connected, then the HTTP connector performs the request upon an event on the **url** port.
:::

---

**abort** `Boolean`  
The **abort** port helps you terminate all pending requests. You add an event to the **abort** port, and that event terminates the requests that haven't been processed yet. To use it, incorporate any abort component into your schema (example: [**Card widget**](https://docs.kelp.app/widgets/icon/latest/doc)), and connect the component's **output** port to your HTTP connector's **abort** port.

---

### Output Ports

**response** `JSON`  
The **response** port helps you receive a response to the data requested and processed through the input ports via the HTTP protocol. The response is represented as a JSON. To work with the response, incorporate any response output widgets of your choice (example: [**Log widget**](https://docs.kelp.app/widgets/log/doc)) into your schema, and connect the widget's **data** port to the HTTP connector's **response** port.

---

**error** `JSON`  
The error port helps you receive the error codes in response to the data requested and processed through the input ports via the HTTP protocol. Errors are represented as a JSON. To look through the error output, incorporate any response output widgets of your choice (example: [**Log widget**](https://docs.kelp.app/widgets/log/doc)) into your schema, and connect the widget's **data** port to the HTTP connector's **error** port.

---

## Connector Settings

**Path parameter processing**  
Select how you'd like to process parameters of the URL.

| Processing Option | Description |
| ----------------- | :----------- |
| **None** | Default. Adds parameters as a *query string* to the URL indicated for the **url** port. |
| **Path parameters** | Adds *path parameters* into the URL indicated for the **url** port. |
| **Path RegExp** | Creates a path specification that will be converted into a regular expression that matches conforming paths. Use the [Path to RegExp](https://github.com/pillarjs/path-to-regexp#path-to-regexp) options to create a specification. |

**Request method**  
The method defines the allowed operation with the resource. The HTTP connector supports the following methods:

  * **GET**: Retrieves a resource.
  * **POST**: Creates a resource.
  * **PUT**: Updates or creates within an existing resource.
  * **PATCH**: Partially modifies an existing resource.
  * **DELETE**: Removes the resource.

**Response data type**  
Specifies the type of data to be received in response (not applicable to the HEAD method). The corresponding header parameters will be added to the HTTP request automatically. `JSON` is the default data type.

**Timeout**  
Specifies the duration of time (in milliseconds) in which the request terminates. By default, timeout is disabled (set to `0`).

**Ignore active state**  
Defines whether the HTTP connector waits for an event to trigger the request:

  * **Yes**: The request is to be sent despite an event.
  * **No**: The request is to be initiated by an event only.

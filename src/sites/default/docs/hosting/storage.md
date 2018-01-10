# Storage

## `Local`

Putting files into local storage.

Example:
```
"Config": {
    "Root": "./projectsroot"
}
```

|Key|Type|Description|
|-|-|-|
|Root|string|Directory path. You can use both absolute and relative path.|

## `Samba`

Putting files into Samba server.

Example:
```
"Config": {
    
}
```

|Key|Type|Description|
|-|-|-|

## `AzureBlob`

Putting files into [Azure Blob storage](https://azure.microsoft.com/en-us/services/storage/blobs/)

Example:
```
"Config": {
    "ConnectionString": "DefaultEndpointsProtocol=https;AccountName=[account_name];AccountKey=[account_key];",
    "ProvideMethod": "Stream",
    "AccessPolicy": null
}
```

|Key|Type|Description|
|-|-|-|
|ConnectionString|string|Certification to connect Azure Blob Storage.|
|ProvideMethod|string|`Stream` or `Redirect`|
|AccessPolicy|string|Used only when `ProvideMethod` is `Redirect`. If defined, SAS url is generated with this policy.|
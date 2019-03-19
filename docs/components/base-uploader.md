---
title: Base Uploader
status: ready
releaseVersion: 0.5.33
---

BaseUploader is a component designed to handle the common functionality for uploading files to GO1. This works by passing a series of renderProps to the child component, which are supplied by [React Dropzone](https://github.com/react-dropzone/react-dropzone). BaseUploader also handles the `<input />` element.

### Base
```.jsx
<BaseUploader fileType="image/*">
  {({open, getRootProps, isDragActive}) => (<View {...getRootProps()} justifyContent="center" onChange={files => window.alert(`{files[0].name} Uploaded`)}>
    <View alignItems="center" justifyContent="center" backgroundColor={isDragActive ? "faded" : "soft"} height="100px">
      <Text>{isDragActive ? "Drop it here" : "Drop Zone"}</Text>
    </View>
    <ButtonFilled onClick={open}>Upload File</ButtonFilled>
  </View>)}
</BaseUploader>
```

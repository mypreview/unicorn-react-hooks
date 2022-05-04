# Unicorn ReactJS Hooks 

![npm](https://img.shields.io/npm/dy/@mypreview/unicorn-react-hooks) 
![npm](https://img.shields.io/npm/v/@mypreview/unicorn-react-hooks?label=version)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@mypreview/unicorn-react-hooks)
![NPM](https://img.shields.io/npm/l/@mypreview/unicorn-react-hooks)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@mypreview/unicorn-react-hooks)

A collection of ReactJS hooks crafted for the WordPress projects.

## Installation

Install the module

```bash
npm install @mypreview/unicorn-react-hooks --save
```

## Table of Content

| Method                  | Description                                                                                                                                                  |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [useActiveTab](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useActiveTab/index.js)            | Maintains and determines the current state of the active tab                                                                                                 |
| [useConditionalRef](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useConditionalRef/index.js)       | Conditionally return an instance of `useRef`                                                                                                                 |
| [useDidMount](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useDidMount/index.js)             | This hook mimicks the `componentDidMount` hook for React                                                                                                     |
| [useDidUpdate](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useDidUpdate/index.js)            | This hook mimicks the `componentDidUpdate` hook for React                                                                                                    |
| [useFindPostById](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useFindPostById/index.js)         | Finds the selected post object based on the given post id and maintains the state of change when it happens                                                  |
| [useGetBlockLayout](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useGetBlockLayout/index.js)       | Retrieves the block support value for the "Layout" settings to be used in the preview                                                                        |
| [useGetCurrentPost](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useGetCurrentPost/index.js)       | Retrieves the current post object given the post ID and post-type                                                                                            |
| [useGetMediaType](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useGetMediaType/index.js)         | Retrieve media MIME type based on given attachment id                                                                                                        |
| [useGetNodeList](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useGetNodeList/index.js)          | Retrieve list of HTML nodes genearted for each post item                                                                                                     |
| [useGetPostMeta](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useGetPostMeta/index.js)          | Retrieves a post meta field of the current post                                                                                                              |
| [useGetPosts](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useGetPosts/index.js)             | Retrieve a list of post-type posts and refresh the list when any direct arguments change                                                                     |
| [useGetProducts](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useGetProducts/index.js)          | Retrieve a list of product posts and refresh the list when any direct arguments change.                                                                      |
| [useGetProductTerms](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useGetProductTerms/index.js)      | Retrieve a list of product taxonomy terms and refresh the list when any direct arguments change.                                                             |
| [useGetSiteData](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useGetSiteData/index.js)          | Retrieves the current site data or object                                                                                                                    |
| [useGetTerms](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useGetTerms/index.js)             | Retrieve a list of taxonomy terms and refresh the list when any direct arguments change.                                                                     |
| [useInnerBlocksProps](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useInnerBlocksProps/index.js)     | This module merely adds backward compatibility for the usage of experimental `useInnerBlocksProps` in projects created using WordPress versions prior to 5.9 |
| [useInputValue](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useInputValue/index.js)           | This hook takes an initial value for an input field and updates it when the `onChange` event raises                                                          |
| [useIsDraggingWithin](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useIsDraggingWithin/index.js)     | This hook determines whether an element is being dragged within another (ref) target element                                                                 |
| [useLatLngBounds](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useLatLngBounds/index.js)         | Generates latitude & longitude from a given address                                                                                                          |
| [usePostTypeNameRestBase](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/usePostTypeNameRestBase/index.js) | This hook maintains the state of the post-type name and REST-API base key extraction from the given string value                                             |
| [usePreparePosts](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/usePreparePosts/index.js)         | Determines whether the current WordPress query has posts to loop over, and slices the query according to the maximum limit determined                        |
| [useTimeout](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useTimeout/index.js)              | A setTimeout hook that calls a callback after a timeout duration                                                                                             |
| [useToast](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useToast/index.js)                | This hook allows for generating custom (notification) toast messages                                                                                         |
| [useToggle](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useToggle/index.js)               | This hook takes a parameter with value and allows for quickly toggling the value                                                                             |
| [useUpdatePostMeta](https://github.com/mypreview/unicorn-react-hooks/blob/main/src/useUpdatePostMeta/index.js)       | Updates a post meta field based on the given post ID                                                                                                         |
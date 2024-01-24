# reduxToolkitQuoteGenerater
![qutoe generater](https://i.postimg.cc/NFvrtYcs/Screenshot-2024-01-23-191546.png)

An application built with Vite, React,and Redux Toolkit to generate random quotes, providing a hands-on understanding of Redux Toolkit setup and handling API requests.

 [Demo](https://redux-toolkit-quote-generater.vercel.app/)
## Features

- Generate random quotes with authors.
- Navigate through quotes using Next and Previous buttons.
- Copy quotes to clipboard.
- Share quotes.

## Technologies Used

- Vite
- React
- Redux Toolkit
- Axios
- Styled-Components

## API

This project uses the Quote API from [dummyjson website](https://dummyjson.com/) to fetch random quotes.

## Things Learned

- Promises
- Async/Await
- API requests with Axios
- Creating Redux store
- Creating slices with `createSlice`
- Creating async thunks with `createAsyncThunk`
- `extraReducers` for handiling api requests
- Using `useSelector` to extract data from the Redux store
- Using `useDispatch` to dispatch actions
- Reducers

## Installation

1. Clone the repository:

```bash
git clone https://github.com/sachinmaurya96/reduxToolkitQuoteGenerater.git
cd reduxToolkitQuoteGenerater

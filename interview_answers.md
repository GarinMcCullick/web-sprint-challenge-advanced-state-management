# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

    Context API helps make passing data to components that are multiple layers deep in the component tree easier. Basically it allows us another way to transfer data in our app rather than prop drilling, by use of a provider and consumer.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

so reducers are functions that get state and an action, reducers make immutable updates state and return the new copied version of state.

the store holds the app state and requires a reducer to update the store, the store is where your updated and truest state lives.

actions carry information aka payloads to the store 

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

redux-thunk allows us to make action creators. action creators return functions not an action. Thunk allows us to dispatch actions certain conditions are met

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I like the idea of redux the most, mainly because its one place to keep and update all of your state (the store) and I really dont like prop drilling. 
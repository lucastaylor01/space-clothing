import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
	.collection("users")
	.doc("kO0qx9CqtWdu0cCnatg0")
	.collection("cartItems")
	.doc("5zp7L9hqDH3u8gw6yOlL");

firestore.doc("/users/kO0qx9CqtWdu0cCnatg0/cartItems/5zp7L9hqDH3u8gw6yOlL");

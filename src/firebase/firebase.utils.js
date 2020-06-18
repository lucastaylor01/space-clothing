import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyC-aVdm5_E8k7WjYfOm9LaU96IZMW-99sY",
	authDomain: "space-db-585d2.firebaseapp.com",
	databaseURL: "https://space-db-585d2.firebaseio.com",
	projectId: "space-db-585d2",
	storageBucket: "space-db-585d2.appspot.com",
	messagingSenderId: "680956271985",
	appId: "1:680956271985:web:43d401e42c3f504caf2ad0",
	measurementId: "G-JXE8HGP7D2",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

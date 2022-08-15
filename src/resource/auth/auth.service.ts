import { Injectable } from "@nestjs/common";
import {addDoc, collection} from 'firebase/firestore'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import {db, app} from '../../config/firebase'
import { UserCreateDto, UserLoginDto } from "./dto/auth.dto";


@Injectable()
export class AuthService {
    async register(data:UserCreateDto) {

        const auth = getAuth(app)
        let user = null
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
            user = userCredential.user
        })
        } catch (err) {
            throw err
        }

        return user
    }
    
    async googleSign() {
        const provider = new GoogleAuthProvider().addScope('https://www.googleapis.com/auth/contacts.readonly')
        const auth = getAuth(app)
        await signInWithPopup(auth, provider).then((result) => {
            const user = result.user
        }).catch((err) => {
            throw err
        })
    }

    async login(data: UserLoginDto) {
        const auth = getAuth(app)
        let user = null
        await signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
            user = userCredential.user
        }).catch((err) => {
            throw err
        })
        return user
    }

    async logout() {
        let message = ''
        const auth = getAuth(app)
        await auth.signOut().then(() => {message = 'success'}).catch((err) => {throw err})
        return message
    }
}
import { Injectable } from "@nestjs/common";
import { collection, getDocs } from "firebase/firestore";
import { db } from "src/config/firebase";

@Injectable()
export class UserService {
    async fetchAllUsers() {
        let allUsers = []
        const allUsersSnapshot = await getDocs(collection(db, 'user'))
        allUsersSnapshot.forEach((user) => {
            allUsers.push(user.data())
        })
        return allUsers
    }
}
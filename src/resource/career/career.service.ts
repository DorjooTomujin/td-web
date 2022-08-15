import { Injectable } from "@nestjs/common";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "src/config/firebase";
import { CareerCreateDto } from "./dto/career.dto";

@Injectable()
export class CareerService{
    async create(data:CareerCreateDto) {
        let res = null
        await addDoc(collection(db, 'career'), {
            email: data.email,
            url: data.url,
            emails: data.emails,
            legalname: data.legalname,
            fullname: data.fullname,
            address: data.address,
            experiences: data.experiences,
            coverLetter: data.coverLetter,
            city: data.city,
            country: data.country,
            degrees: data.degrees,
            postalCode: data.postalCode,
            phones: data.phones,
            website: data.website,
            
        }).then((result) => {
            res = result
        })
        return res.id
    }

    async fetchAllCV() {
        let CVs = []
        const getAllCv = await getDocs(collection(db, 'career'))
        getAllCv.forEach((cv) => {
            CVs.push(cv.data())
        })
        return CVs
    }
}
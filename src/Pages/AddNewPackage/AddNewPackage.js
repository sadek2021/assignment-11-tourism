import React from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import './AddNewPackage.css'

const AddNewPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://whispering-tor-36819.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="bg-image">
            <div  className="container text-center add-package">
                <h2 className="text-white">Please Add a New Package</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    <input {...register("detail")} placeholder="Description" />
                    <input type="number" {...register("price")} placeholder="Price" />
                    <input {...register("img")} placeholder="Image url" />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewPackage;
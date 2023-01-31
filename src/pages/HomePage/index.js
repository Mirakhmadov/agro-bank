import React, {useEffect, useState} from 'react';
import {Table} from "./components";
import axios from "axios";

const Index = () => {
    const [banks, setBanks] = useState([])


    const request = () => {
        // axios.get("http://agroportal.track.uz/api/financing/bank-list", {
        axios.get("http://agroportal.track.uz/api/financing/petition-preferential-credit-cluster-by-list/", {
            withCredentials: true,
        }).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e.message)
        })
    }


    useEffect(() => {
        console.log(banks)
    }, [banks])

    return (
        <div>
            <button onClick={request}>Click</button>
            <Table>
                <thead>
                <tr>
                    <th rowSpan={3}>N</th>
                    <th rowSpan={3}>Fermer xojaliklari nomi</th>
                    <th rowSpan={3}>STIR</th>
                    <th rowSpan={3}>MFO</th>
                    <th rowSpan={3}>Hisob raqami</th>
                    <th rowSpan={3}>massiv nomi</th>
                    <th colSpan={10}>Fyuchers</th>
                    <th rowSpan={3}>tuman KXB malumotnomasi</th>
                </tr>
                <tr>
                    <th colSpan={5}>harid qilingan paxta hom-ashyosi va uruglik paxta</th>
                    <th rowSpan={2}>shartnoma raqami</th>
                    <th colSpan={2}>imzolangan sana</th>
                    <th colSpan={2}>royhatga olingan</th>
                </tr>
                <tr>
                    <th>maydoni, ga</th>
                    <th>yalpi hosil, ga</th>
                    <th colSpan={2}>summasi, so'm</th>

                    <th>klaster</th>
                    <th>xo'jalik</th>
                    <th>raqami</th>
                    <th>sanasi</th>
                </tr>
                </thead>
            </Table>
        </div>
    );
};

export default Index;

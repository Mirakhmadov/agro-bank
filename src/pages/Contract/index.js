import React, {useEffect} from 'react';
import {Table} from "./components";
import {useDispatch, useSelector} from "react-redux";
import {fetchContracts} from "../../redux/actions/ActionCreaters";
import {Link} from "react-router-dom";
import {Button} from "../../components/MainComponents";

const Index = () => {
    const dispatch = useDispatch()
    const {isLoading, error, contracts, offer} = useSelector(state => state.app)


    useEffect(() => {
        dispatch(fetchContracts())
    }, [dispatch])

    if (error) return <h1>{error}</h1>

    return (
        <div>
            <Link to={`/contract/create/${offer?.id}`}>
                <Button>Ariza tayyorlash</Button>
            </Link>
            <Table>
                <thead>
                <tr>
                    <th rowSpan={3}>N</th>
                    <th rowSpan={3} className={"min-w"}>Fermer xojaliklari nomi</th>
                    <th rowSpan={3}>STIR</th>
                    <th rowSpan={3}>MFO</th>
                    <th rowSpan={3}>Hisob raqami</th>
                    <th rowSpan={3}>massiv nomi</th>
                    <th colSpan={9}>Fyuchers</th>
                    <th rowSpan={3}>tuman KXB malumotnomasi</th>
                </tr>
                <tr>
                    <th colSpan={4}>harid qilingan paxta hom-ashyosi va uruglik paxta</th>
                    <th rowSpan={2}>shartnoma raqami</th>
                    <th colSpan={2}>imzolangan sana</th>
                    <th colSpan={2}>royhatga olingan</th>
                </tr>
                <tr>
                    <th>maydoni, ga</th>
                    <th>hosildorlik, s/ga</th>
                    <th>yalpi hosil, ga</th>
                    <th>summasi, so'm</th>

                    <th>klaster</th>
                    <th>xo'jalik</th>
                    <th>raqami</th>
                    <th>sanasi</th>
                </tr>
                </thead>

                <tbody>
                {contracts && contracts.arr && contracts.arr.length > 0 && contracts.arr.map((item, i) =>
                    <tr key={i + 1}>
                        <td>{i + 1}</td>
                        <td className={"text-left"}>{item.farmer?.name}</td>
                        <td>{item.farmer?.tin}</td>
                        <td>{item.farmer?.bank_mfo}</td>
                        <td>{item.farmer?.bank_account}</td>
                        <td>{item.farmer?.organizational_address?.name}</td>
                        <td>{item.total_area}</td>
                        <td>{item.total_last_productivity}</td>
                        <td>{item.total_gross_productivity}</td>
                        <td>{item.total_price}</td>
                        <td>{item.offer_number}</td>
                        <td>{item.get_cluster_signed_date}</td>
                        <td>{item.get_farmer_signed_date}</td>
                        <td>{item.reference_number}</td>
                        <td>{item.get_qxv_signed_date}</td>
                        <td>{item.farmer?.get_farmer_signed_date}</td>
                    </tr>
                )}
                </tbody>

                <tfoot>
                <tr>
                    <th/>
                    <th style={{textAlign: "center"}}>Jami</th>
                    <th colSpan={4}/>
                    <th>{contracts.area}</th>
                    <th>{contracts.last}</th>
                    <th>{contracts.gross}</th>
                    <th>{contracts.price}</th>
                    <th colSpan={6}/>
                </tr>
                </tfoot>
            </Table>
        </div>
    );
};

export default Index;

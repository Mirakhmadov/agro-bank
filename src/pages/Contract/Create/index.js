import React, {useEffect} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchBank, fetchBanks, fetchContractPage1} from "../../../redux/actions/ActionCreaters";
import PlacementItem from "../../../components/PlacementItem";
import {Block, Button, Flex, Title} from "../../../components/MainComponents";
import {httpPost} from "../../../utils/request";
import {Wrapper} from "../components";

const Index = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate();
    const {banks, bank, petition1, isLoading, error} = useSelector(state => state.app)

    useEffect(() => {
        dispatch(fetchBanks())
        dispatch(fetchContractPage1(id))
    }, [])


    const getBank = ({target: {value}}) => {
        dispatch(fetchBank(value))
    }

    const submitContract = () => {
        if (bank.pk && petition1.pk) {
            httpPost({
                url: `/api/financing/petition-preferential-credit-view/${id}`,
                data: {
                    bank_id: bank.pk,
                    credit_id: petition1.pk
                }
            }).then(({data}) => {
                alert(data.message)
                navigate(`/contract/create-two/${petition1.pk}`)
            }).catch(e => {
                console.log(e)
            })
        } else {
            alert("Bank tanlanmagan!")
        }
    }


    if (error) return <h1>{error}</h1>
    return (
        <div>
            <Link to={"/"}> HomePage </Link> |
            <Link to={"/contract"}> Contract </Link>
            <hr/>


            <Wrapper>
                <Title>
                    Tijorat bankining rekvizitlari
                </Title>

                <Flex>
                    <Flex>
                        <div>Ariza raqami : {petition1.petition_number}</div>
                        <div>sanasi : ______</div>
                    </Flex>
                    <div>
                        Tijorat bank:

                        <select onChange={getBank}>
                            <option value={""}>Bank tanlang</option>
                            {banks && banks.length > 0 && banks.map(item =>
                                <option key={item.pk} value={item.pk}>{item.name}</option>
                            )}
                        </select>
                    </div>
                </Flex>

                {bank &&
                    <Block>
                        {JSON.stringify(bank)}
                    </Block>
                }


                <div>
                    <Title>
                        Fyuchers shartnomasiga asosan yetishtiriladigan paxta xom-ashyosi va urugli paxta
                    </Title>

                    <div>
                        Tuman hokimi qarori: <input/>
                    </div>


                    {petition1 && petition1.placement_list && petition1.placement_list.length > 0 && petition1.placement_list.map((item, i) =>
                        <PlacementItem key={i} placement={item}/>
                    )}
                </div>


                <Button onClick={submitContract}>
                    Arizani tasdiqlash
                </Button>
            </Wrapper>
        </div>
    );
};

export default Index;

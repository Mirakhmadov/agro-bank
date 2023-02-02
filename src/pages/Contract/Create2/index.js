import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Block, Button, Flex, Title} from "../../../components/MainComponents";
import {Wrapper} from "../components";
import {fetchContractPage2} from "../../../redux/actions/ActionCreaters";
import {httpPost} from "../../../utils/request";

const Index = () => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate();
    const {petition2, isLoading, error} = useSelector(state => state.app)


    useEffect(() => {
        dispatch(fetchContractPage2(id))
    }, [])


    const upload = (key, e) => {
        setForm({...form, [key]: e.target.files[0]})
    }
    const submit = () => {
        if (form['business_plan'] && form['accounting1'] && form['accounting1']) {
            let data = new FormData();
            data.append(`business_plan`, form['business_plan'], form['business_plan']['name']);
            data.append(`accounting1`, form['accounting1'], form['accounting1']['name']);
            data.append(`accounting2`, form['accounting2'], form['accounting2']['name']);

            httpPost({
                url: `/api/financing/petition-preferential-credit-view-two/${id}`,
                data: data
            }).then(({data}) => {
                console.log(data)
                alert("success")

                window.location.href = data.message
                // window.open(data.message)
            }).catch(e => {
                console.log(e)
            })
        } else {
            alert("Fayllar yuklanmagan")
        }
    }

    return (
        <div>
            <Link to={"/"}> HomePage </Link> |
            <Link to={"/contract"}> Contract </Link>
            <hr/>

            <Wrapper>
                <Title>
                    Kredit shartlari
                </Title>

                {petition2 &&
                    <Block>
                        {JSON.stringify(petition2.credit_terms)}
                    </Block>
                }


                <Title>
                    Kredit qaytmaslik hatarini sugurtalash
                </Title>


                {petition2 &&
                    <Block>
                        <Flex>
                            <div>Kredit taminoti foizi: {petition2.insurance_prosent}</div>
                            <div>Sugurta polisi summasi: {petition2.summa_insurance}</div>
                        </Flex>
                    </Block>
                }

                <Title>
                    Arizaga ilova qilingan xujjatlar
                </Title>

                {petition2 &&
                    <Block>
                        <Flex>
                            <div>Biznes reja nusxasi: <input type={"file"}
                                                             onChange={(e) => upload("business_plan", e)}/></div>
                            <div>Buxgalteriya F-1: <input type={"file"} onChange={(e) => upload("accounting1", e)}/>
                            </div>
                            <div>Buxgalteriya F-2: <input type={"file"} onChange={(e) => upload("accounting2", e)}/>
                            </div>
                        </Flex>
                    </Block>
                }

                <Button onClick={submit}>
                    Arizani tasdiqlash
                </Button>
            </Wrapper>
        </div>
    );
};

export default Index;

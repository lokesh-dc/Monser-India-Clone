import { Checkbox } from "@chakra-ui/react";

export default function CheckboxCreator ({data,filteringData}) {
    function handleClick(e) {
        const {name , checked} = e.target;
        if(checked===true){
            filteringData(name)
        }
    }
    return (
        <>
            {
                data.map((item,index)=>(
                    <Checkbox name={item} onChange={handleClick} key={index}>
                        {item}
                    </Checkbox>
                ))
            }
        </>
    )
}
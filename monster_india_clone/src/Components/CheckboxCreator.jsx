import { Checkbox } from "@chakra-ui/react";

export default function CheckboxCreator ({data}) {
    let count = 0;
    return (
        <>
            {
                data.map((item)=>(
                    <Checkbox key={count++}>
                        {item}
                    </Checkbox>
                ))
            }
        </>
    )
}
import { 
    Page,
    Layout,
    Button,
    Frame,
    DataTable,
    Toast
} from "@shopify/polaris";
import '@shopify/polaris/build/esm/styles.css';
import React, { useCallback, useEffect, useState } from "react";



interface Comment {
    product: string;
    userName: string;
    content: string;
}
type TableData = string | number | React.ReactNode
const Index = () => {
    
    const [active, setActive] = useState<Boolean>(false);
    const [rows, setRow] = useState< TableData[][]>([]);

    const toggleActive = useCallback(() => setActive((active) => !active), []);

    const addThemeFile = useCallback(() => {
        fetch(`/v1/theme`, {
            method: 'POST',
        }).then(res =>  res.json()).then(resp => {
            toggleActive()
        })
    },[])

    useEffect(() => {
        fetch(`/v1/comment`).then(res =>  res.json()).then( (resp : Comment[]) => {
            const newA = resp.map((data : Comment) : Array<string> => {
                return [
                    data.userName,
                    data.product.replace(/-/g, ' ').charAt(0).toUpperCase() + data.product.replace(/-/g, ' ').slice(1),
                    data.content
                ]
            })
            setRow(newA)
        })
    }, [])

  
    const toastMarkup = active ? (
      <Toast content="Message sent" onDismiss={toggleActive} />
    ) : null;

    return (
        <>
            <Frame >
                <Page title="Comments">
                    <Layout>
                        <Layout.Section>
                            <Button primary onClick={addThemeFile}>Import section to Main Theme</Button>
                            {toastMarkup}
                        </Layout.Section>
                        <Layout.Section>
                            <DataTable 
                                columnContentTypes={[
                                    'text',
                                    'text',
                                    'text',
                                ]}
                                headings={[
                                    'User Name',
                                    'Product',
                                    'Comment',
                                ]}
                                rows={rows}
                            />
                        </Layout.Section>
                    </Layout>
                </Page>
            </Frame>
        </>
    )
};



export default Index;
import React, { useState, useMemo, useDeferredValue } from 'react';
import { Col, Form, ListGroup, Row, Image } from 'react-bootstrap';
import productsData from './data.json'



const products = [...Array(5).keys()].map((item) => productsData.concat(productsData)).flat(Infinity)

const filterBy = (product, searchedBy) => {
    const name = (product?.name || "").toLowerCase();
    const search = (searchedBy || '').toLowerCase()
    return name.includes(search)
}

function Search() {
    const [searched, setSearched] = useState('');
    const deferredValue = useDeferredValue(searched)

    const productsList = useMemo(() => {
        return products.filter((item) => filterBy(item, deferredValue))
    }, [deferredValue]);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearched(value);
    };

    return (
        <div className='py-3'>
            <Form>
                <Form.Group className='d-flex' controlId="search">
                    <Form.Control
                        type='text' value={searched} onChange={handleChange}
                        placeholder="Search for a product"
                    />
                </Form.Group>
            </Form>

            {productsList && !!productsList.length && deferredValue && <ListGroup>
                {productsList.map((result, index) => (
                    <ListGroup.Item key={result.name}>
                        <Row>
                            <Col xs={2}>
                                <Image src={result.image} alt={result.name} width={50} height={50} />
                            </Col>
                            <Col xs={7}>
                                <h5>{result.name}</h5>
                                <p>Price: ${result.price}</p>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            }
        </div>
    );
}

export default Search;

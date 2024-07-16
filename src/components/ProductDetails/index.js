import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { getProduct } from '../../service/products';
import { Loading } from '../loading/Loading';
import "./style.css"
import { useQuery } from '@tanstack/react-query';

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, loading } = useQuery({
        queryKey: ['product', id],
        queryFn: () => getProduct(id)
    })

    if (loading || !product) {
        return <Loading />
    }

    return (
        <Container className="my-4">
            <Row>
                <Col xs={7} >
                    <Image height={'100%'} width={'100%'} style={{ objectFit: 'cover' }} src={product.image} alt={`Product ${product.id}`} />
                </Col>
                <Col xs={5} style={{ padding: "40px", backgroundColor: "#f9f9f9", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
                    <div className="product-details">
                        <h1 className="title">Product Details</h1>
                        <p className="subtitle">Details for product with ID: {id}</p>
                        <div className="details">
                            <p><strong>Category:</strong> {product.category}</p>
                            <p><strong>Description:</strong> {product.description}</p>
                            <p><strong>ID:</strong> {product.id}</p>
                            <p><strong>Price:</strong> ${product.price}</p>
                            <p><strong>Rating:</strong> {product?.rating?.rate} out of {product?.rating?.count} ratings</p>
                            <p><strong>Title:</strong> {product.title}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Link to="/products">
                Go back
            </Link>
        </Container>
    );
};

export default ProductDetails;
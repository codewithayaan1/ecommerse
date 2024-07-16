import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { getCart } from '../service/cart';
import { getUser } from '../service/user';
import { checkExecutionTime } from '../utils/helper';

const AppNavbar = () => {
    const [{ cart, user, wishlist }, setData] = useState({ cart: {}, user: {}, wishlist: {} })

    useEffect(() => {
        async function getData() {
            const [cart, user, wishlist] = await Promise.all(
                [getCart(), getUser(), getCart()]
            )
            setData({ cart, user, wishlist })
        }
        checkExecutionTime(getData, 'PromiseAll')
    }, [])

    const cartCount = (cart?.products || [])?.length ?? 0;
    const userName = `${user?.name?.firstname ?? ''} ${user?.name?.lastname ?? ''}` ?? ''
    const wishlistCount = (wishlist?.products || [])?.length ?? 0;

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>MyStore</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-50">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <Nav.Link>Products</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className="w-50 d-flex justify-content-end">

                        <Nav.Link>
                            <i className="fas fa-heart" /> Wishlist ({wishlistCount})
                        </Nav.Link>
                        <Nav.Link>
                            <i className="fas fa-shopping-cart" /> Cart ({cartCount})
                        </Nav.Link>
                        <Nav.Link className='text-white'>
                            <i className="fas fa-user text-white" /> {userName}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
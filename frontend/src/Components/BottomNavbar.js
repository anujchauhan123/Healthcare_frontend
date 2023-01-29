import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Fab from '@mui/material/Fab';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Link } from 'react-router-dom';

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});

export default function BottomAppBar() {
    return (
        <>
            <AppBar position="fixed" style={{ backgroundColor: "white", color: "black" }} sx={{ top: 'auto', bottom: 0 }}>
                <div className='flex h-14' style={{ display: "flex" }}>
                    <div className='flex border-2 w-1/2 justify-center items-center mx-auto'>
                        <Link className='flex' to="/cart">
                            <ShoppingCartIcon />
                            <p>Cart</p>
                        </Link>
                    </div>
                    <div className='w-1/2 border-2 justify-center items-center  mx-auto flex'>
                        <Link className='flex'>
                            <BookmarkBorderIcon />
                            <p>Orders</p>
                        </Link>
                    </div>
                </div>
            </AppBar>
        </>
    );
}

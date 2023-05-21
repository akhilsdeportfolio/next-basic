"use client"
import { FavoriteBorderOutlined, LocationOnOutlined, RestoreOutlined } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import Index from '../../src/components/EmailList/index'
import React, { useState } from 'react'


export default function Dashboard() {

    const [value,setValue]=useState("")
  return (
    <div style={{position:'absolute',bottom:0,maxWidth:'50%',margin:'auto'}}>
        <Index />
    <BottomNavigation
    showLabels
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
  >
    <BottomNavigationAction icon={<RestoreOutlined />} />
    <BottomNavigationAction label="Favorites" icon={<FavoriteBorderOutlined />} />
    <BottomNavigationAction label="Nearby" icon={<LocationOnOutlined />} />
  </BottomNavigation>
  </div>
  )
}

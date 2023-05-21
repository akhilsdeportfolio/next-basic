"use client"
import { Skeleton } from '@mui/material'
import React, { Fragment } from 'react'

export default function Loading() {

  return (
   <div style={{maxWidth:'80%',margin:'auto',marginTop:'20vh'}}>
    <Skeleton animation="wave"/>
    <Skeleton animation="wave"/>
    <Skeleton animation="wave"/>
   </div>
  )
}

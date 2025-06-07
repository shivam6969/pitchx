import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Connect to MongoDB
    const client = await clientPromise
    const db = client.db("carriers")
    
    // Insert the application into the carriers collection
    const result = await db.collection("carriers").insertOne({
      ...data,
      createdAt: new Date(),
      status: 'pending'
    })

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully',
      applicationId: result.insertedId 
    })
  } catch (error) {
    console.error('Error submitting application:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit application' },
      { status: 500 }
    )
  }
} 
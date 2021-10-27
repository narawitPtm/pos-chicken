
const baseUrl: string = 'https://localhost:44382'
// const baseUrl: string = 'https://localhost:5001'
// const baseUrl: string = 'http://localhost:51680'

export async function get(path: string) {
  try {
    const response = await fetch(`${baseUrl}${path}`)
    let responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.error(error.message)
  }
}

export async function post(path: string, data: any) {
  const response = await fetch(`${baseUrl}${path}`, 
  {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    let responseJson = await response.json()
    return responseJson
  } else {
    throw new Error('เกิดข้อผิดพลาดบางอย่าง')
  }
}

export async function patch(path: string, data: any) {
  const response = await fetch(`${baseUrl}${path}`, 
  {
    method: "patch",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (response.ok) {
    let responseJson = await response.json()
    return responseJson
  } else {
    throw new Error('เกิดข้อผิดพลาดบางอย่าง')
  }
}
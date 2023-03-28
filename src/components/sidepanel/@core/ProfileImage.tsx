import React from 'react'

function ProfileImage(props:any) {
  let str = props.name.split(" ")
  str = str[0][0] + str[1][0];
  return (
    <>
    <div className="box-border font-bold tracking-widest h-12 w-12 p-2 bg-yellow-300 text-center rounded-lg mx-3 border-4 ">
      <div>{str}</div>
    </div>

    </>
  )
}

export default ProfileImage
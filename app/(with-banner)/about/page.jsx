'use client'
import { useRouter } from 'next/navigation'

const About = () => {
  const router = useRouter()

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptate
        placeat eligendi sapiente velit quaerat iste obcaecati fugiat sequi
        pariatur, ipsum tempora autem eaque sit commodi nihil eius at nostrum!
      </p>
      <button
        onClick={() => {
          alert('usando hook "useRouter" de Nextjs') // Aca puede ir  logica
          router.push('/')
        }}
      >
        Click
      </button>
    </div>
  )
}

export default About

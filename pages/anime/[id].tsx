import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'

interface IAnimePageProps{
    data: any
}

const AnimePage: NextPage<IAnimePageProps> = ({ data }) => {
    return (
        <>
            <div>{data.titles[0].title}</div>
            <Image 
                src = {data.images.jpg.image_url}
                alt = {""}
                width = {200}
                height = {300}
            />
        </>
    )
}

export default AnimePage

export const getServerSideProps: GetServerSideProps = async (context) => {
    const request = await fetch('https://api.jikan.moe/v4/anime/' + context.query.id)
    const body = await request.json()

    return {
        props: {
            data: body.data,
        },
    }
}
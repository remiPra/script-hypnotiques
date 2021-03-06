import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import InputMain from '../component/InputMain'
import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material'
// icon
import ImageIcon from '@mui/icons-material/Image';
import VapeFreeIcon from '@mui/icons-material/VapeFree';

export default function Home() {

  useEffect(() => {
    setSearch('')
    document.getElementById('inputSearch').value = ''
  }, [])

  const [search, setSearch] = useState("")

  const searchFuct = (data) => {
    setSearch(data);
    console.log(search)
  }

  const [data, setData] = useState([
    {icon: <ImageIcon/> , title: 'Vaincre les phobies', link: "/script/VaincrePhobiesAraignees", tags: "Vaincre les phobies peur" },
    {icon:<VapeFreeIcon/>, title: 'Protocole contrôle douleur', link: "/script/ProtocoleControleDouleur", tags: "Protocole contrôle douleur" },
    {icon:<VapeFreeIcon/>, title: 'Arreter de fumer', link: "/script/ArreterDeFumer", tags: "Arreter de fumer tabac" },
    {icon:<VapeFreeIcon/>, title: '20 pensées positives', link: "/script/PenseePositivesCoue", tags: "pensée positives 20 autosuggestions" }
  ])
  return (
    <div style={{position:'relative'}}>
      <Head>
        <title>Script Hypnose</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
            
            <div style={{marginTop:'100px'}}>
        <InputMain onsearch={searchFuct} />
        <List>
          {data.map((element) => (

            (search == "" || element.tags.toLowerCase().includes(search.toLowerCase())) ? (
              <Link passHref={true} href={element.link}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      {element.icon}
                    </Avatar>
                  </ListItemAvatar>
                  <p>{element.title}</p>
                </ListItem>
              </Link>)
              : null)
          )}
        </List>
        </div>
      </div>
    </div>
  )
}

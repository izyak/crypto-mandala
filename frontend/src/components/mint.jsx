import { sendTx } from "../helpers/iconservice";
import styles from "../App.module.css"
import { NotificationManager } from 'react-notifications'
import { InputGroup, Container, Button } from 'react-bootstrap';

const Mint = () => {
    const generateMandala = () => {
        // connect an api to generate a mandala
        console.log("Generated")
        return "bafybeigwmyvhjkjego7u377piopff7hg65d3kpqcciyjbyzogr7b2dsnbm"
    }

    const mintNFT = async () => {
        const params = {
            _to: 'hx5de49b9c9833f31d6bd237a074f86a30cc77126b',
            _tokenURI: generateMandala()
        }
        var txResult = await sendTx("mint", params, 0)
        if (txResult.status === 0) {
            NotificationManager.error("Error minting...")
        } else {
            NotificationManager.success("Mint complete.", txResult.txHash)
        }
    }

    return (
        <Container>
            <h1 className={styles.MintTitle}> Create New </h1>
            <img className={styles.SmallerImage} alt="random" src="https://ipfs.io/ipfs/bafybeigwmyvhjkjego7u377piopff7hg65d3kpqcciyjbyzogr7b2dsnbm/1.png" />
            <InputGroup className="mb-3">
                <Button className={styles.CenterButton} size="lg" variant="outline-dark" onClick={mintNFT}>Generate</Button>
            </InputGroup>
        </Container>
    )
}


export default Mint;
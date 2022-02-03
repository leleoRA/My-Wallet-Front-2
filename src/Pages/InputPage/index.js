import { Container, Button } from "./style";

export default function InputPage(){
    return(
        <Container>
            <header>Nova entrada</header>
          <form>
            <input
              type="number"
              placeholder="Valor"
              name="amount"
            />
            <input
              type="text"
              placeholder="Descrição"
              name="description"
            />
            <Button>Salvar entrada
            </Button>
          </form>
        </Container>
    )
}
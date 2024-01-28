import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SiderbarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SiderbarContainer>
      <Avatar />
      <Titulo fontSize={20}>Marcos Mantovani</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        marcospider21
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev FullStack Pyton
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SiderbarContainer>
  </aside>
)

export default Sidebar

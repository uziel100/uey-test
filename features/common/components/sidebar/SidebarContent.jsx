import { useSidebarAmazonContextProvider } from 'features/common/context'
import { Box, Button, List, ListItem, ListItemButton, ListItemText, MenuList, Stack } from '@mui/material'
import { IconLogoUey } from 'components/icons'
import LogoutIcon from '@mui/icons-material/Logout'
import { BpButton, BpTypography } from 'components/shared'
import SidebarTitle from './SidebarTitle'
import SidebarRow from './SidebarRow'
import SidebarTitleButton from './SidebarTitleButton'

const SidebarContent = () => {
  const { entryStore } = useSidebarAmazonContextProvider()

  return (
    <Box pb={10}>
      <Stack pl={2} direction="row" mt={2} gap={1} mb={2}>
        <IconLogoUey width={50} height={30} />
        <BpTypography fontWeight={600} color="grey.800" variant="h6">
          ¡Bienvenido!
        </BpTypography>
      </Stack>
      <MenuList>
        {entryStore?.map(category => (
          <div key={category.id}>
            <SidebarTitle name={category.name} />
            {category?.categories?.map(entry => (
              <SidebarRow key={entry.id} root={category.slug} name={entry.name} entry={entry} />
            ))}
          </div>
        ))}
        <br />
        <SidebarTitleButton name="Espacios" isUpperCase={false} />
        <SidebarTitleButton name="Experiencias" isUpperCase={false} />
        <SidebarTitleButton name="Proveedores" isUpperCase={false} />
      </MenuList>

      <Stack pl={2} mt={2} direction="column" alignItems="flex-start">
        <Box mb={2}>
          <BpTypography fontWeight={600} color="grey.700" variant="subtitle1" isUpperCase label="¡ASOCIATE CON UEY!" />
          <BpTypography sx={{ maxWidth: '300px', mt: 1 }} fontWeight={400} color="grey.600" variant="body2">
            Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam, purus sit amet luctus venenatis
          </BpTypography>
        </Box>
        <BpButton sx={{ height: '36px', ml: '12%' }} color="secondary" fullWidth={false}>
          Convertirse en proveedor
        </BpButton>
      </Stack>
      <List sx={{ mt: 2 }}>
        <ListItem>
          <ListItemText sx={{ pl: 1 }}>
            <BpTypography
              fontWeight={600}
              color="grey.700"
              variant="subtitle1"
              isUpperCase
              label="AYUDA Y CONFIGURACIÓN"
            />
          </ListItemText>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ pl: 3 }}>
            <BpTypography fontWeight={400} color="grey.700" variant="body1" label="Mi cuenta" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ pl: 3 }}>
            <BpTypography fontWeight={400} color="grey.700" variant="body1" label="Ayuda" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ pl: 3 }}>
            <BpTypography fontWeight={500} color="grey.700" variant="body1" label="Cotización personalizada" />
          </ListItemButton>
        </ListItem>
      </List>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          background: '#fff',
          width: { xs: '300px', sm: '340px', md: '350px' },
          padding: '0.5rem 1rem'
        }}
      >
        <Button startIcon={<LogoutIcon />} variant="text" color="secondary" fullWidth={false}>
          <BpTypography fontWeight={500} color="grey.700" variant="body2">
            Desconectarse
          </BpTypography>
        </Button>
      </Box>
    </Box>
  )
}
export default SidebarContent
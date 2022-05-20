import { Loading, Grid } from '@nextui-org/react';

export default function App() {
  return (
    <Grid.Container gap={2} className="flex justify-center">
      <Grid>
        <Loading type="points" />
      </Grid>
    </Grid.Container>
  );
}

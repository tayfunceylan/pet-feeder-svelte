<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { page } from '$app/stores';

  let username = $page.url.searchParams.get('username');
  let token = $page.url.searchParams.get('token');
</script>

<!-- center card -->
<Card.Root class="mx-auto mt-20 w-[350px]">
  <Card.Header>
    <Card.Title>Register</Card.Title>
    <Card.Description
      >Gib ein Passwort ein, um dich zu registrieren. Sonst musst du nichts weiter erledigen.</Card.Description
    >
  </Card.Header>
  <Card.Content>
    <form>
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="token">Token</Label>
          <Input id="token" placeholder="Enter token" disabled bind:value={token} />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="username">Username</Label>
          <Input id="username" placeholder="Enter token" disabled bind:value={username} />
        </div>
        <div class="flex flex-col space-y-1.5">
          <Label for="password">Password</Label>
          <Input id="password" placeholder="Enter password" />
        </div>
      </div>
    </form>
  </Card.Content>
  <Card.Footer class="flex justify-between">
    <Button>Login</Button>
  </Card.Footer>
</Card.Root>

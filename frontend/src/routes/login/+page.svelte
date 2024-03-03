<script lang="ts">
  import Logo from '$lib/components/my/logo/logo.svelte';
  import { Button } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
</script>

<Card.Root class="mx-auto mt-32 w-[350px]">
  <Card.Header>
    <Card.Title>
      <Logo state="loaded" />
    </Card.Title>
    <!-- <Card.Description>Deploy your new project in one-click.</Card.Description> -->
  </Card.Header>
  <Card.Content>
    <form>
      <div class="grid w-full items-center gap-4">
        <div class="flex flex-col space-y-1.5">
          <Label for="username">Username</Label>
          <Input id="username" placeholder="Enter username" />
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

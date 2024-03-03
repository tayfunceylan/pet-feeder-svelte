<script lang="ts">
  // icons
  import ArrowLeft from 'svelte-radix/ArrowLeft.svelte';
  import ArrowRight from 'svelte-radix/ArrowRight.svelte';
  import MenuIcon from 'svelte-radix/HamburgerMenu.svelte';
  import ResetDateIcon from 'svelte-radix/CounterClockwiseClock.svelte';
  import CalendarIcon from 'svelte-radix/Calendar.svelte';
  // my components
  import Logo from '$lib/components/my/logo/logo.svelte';
  import { Button } from '$lib/components/ui/button';
  // shadcn components
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import * as Popover from '$lib/components/ui/popover';
  import { Badge } from '$lib/components/ui/badge';
  import { Separator } from '$lib/components/ui/separator';
  import { Calendar } from '$lib/components/ui/calendar';
  import { cn } from '$lib/utils';

  import { type DateValue, DateFormatter, getLocalTimeZone, now } from '@internationalized/date';

  const df = new DateFormatter('de-DE', {
    dateStyle: 'long'
  });

  let selectedDate: DateValue = now(getLocalTimeZone());
  function addDays(days: number) {
    selectedDate = selectedDate.add({ days });
  }
  function resetDate() {
    selectedDate = now(getLocalTimeZone());
  }
</script>

<!-- NAVBAR -->
<nav class="rounded-b-md border-gray-200 bg-white shadow-md dark:bg-gray-900">
  <div class="group mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
    <!-- LOGO -->
    <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
      <Logo state="loaded" />
    </span>
    <!-- RESET DATE BUTTON -->
    <Button class="ml-auto" onclick={resetDate} variant="ghost" size="icon">
      <ResetDateIcon />
    </Button>
    <!-- DROPDOWN MENU -->
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild let:builder>
        <Button builders={[builder]} variant="ghost" size="icon">
          <MenuIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content class="w-56">
        <DropdownMenu.Label>Vorname Nachname</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Group>
          <a href="/profile"><DropdownMenu.Item>Profile</DropdownMenu.Item></a>
          <a href="/settings"><DropdownMenu.Item>Settings</DropdownMenu.Item></a>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>Log out</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
</nav>

<!-- DATEPICKER -->
<div class="mt-4 flex justify-center">
  <Popover.Root>
    <Popover.Trigger asChild let:builder>
      <div class="inline-flex gap-2" role="group">
        <Button onclick={() => addDays(-1)} variant="outline" size="icon"><ArrowLeft /></Button>
        <Button
          variant="outline"
          class={cn(
            'w-[240px] justify-start text-left font-normal',
            !selectedDate && 'text-muted-foreground'
          )}
          builders={[builder]}
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          {selectedDate ? df.format(selectedDate.toDate(getLocalTimeZone())) : 'Pick a date'}
        </Button>
        <Button onclick={() => addDays(1)} variant="outline" size="icon"><ArrowRight /></Button>
      </div>
    </Popover.Trigger>
    <Popover.Content class="mt-3 w-auto p-0" align="center">
      <Calendar bind:value={selectedDate} />
    </Popover.Content>
  </Popover.Root>
</div>

<!-- MEALS -->
<div class="mt-2 p-2">
  <div class="rounded-lg p-4">
    <div class="ml-1 text-sm font-semibold text-gray-800 dark:text-gray-100">19:20 Uhr</div>
    <Badge variant="outline">100g</Badge>
    <Badge variant="outline">Nassfutter</Badge>
    <Badge variant="outline">Mjamjam Mix 6</Badge>
  </div>
  <Separator />
  <div class="rounded-lg p-4">
    <div class="ml-1 text-sm font-semibold text-gray-800 dark:text-gray-100">19:20 Uhr</div>
    <Badge variant="outline">100g</Badge>
    <Badge variant="outline">Nassfutter</Badge>
    <Badge variant="outline">Mjamjam Mix 6</Badge>
  </div>
  <!-- greedy button pad as much as you can -->
  <Button class="w-full" variant="outline">ADD MEAL</Button>
</div>

<!-- QUICK MEALS -->
<div class="mt-2 p-2">
  <div class="ml-1 text-xl font-semibold text-gray-800 dark:text-gray-100">Quick Meals</div>
  <div class="mt-2 grid grid-cols-2 gap-2 *:h-auto *:basis-1/2 *:text-wrap *:px-2">
    <Button variant="outline">ADD MEALassjdf lksdfkljsdlkfjl ks</Button>
    <Button variant="outline">ADD MEALassjdflksdfkljsdlkfjj</Button>
  </div>
</div>

<!-- AUTOMATIC FEEDER -->
<div class="mt-2 p-2">
  <div class="ml-1 text-xl font-semibold text-gray-800 dark:text-gray-100">Automatic Feeder</div>
  <div class="rounded-lg p-4">
    <div class="flex gap-2">
      <div class="ml-1 text-sm font-semibold text-gray-800 dark:text-gray-100">16:00 Uhr</div>
      <div class="ml-1 text-sm text-gray-800 dark:text-gray-400">Amount: 24g</div>
    </div>
    <Badge variant="outline">24g</Badge>
    {#each ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'] as day}
      <Badge variant="outline">{day}</Badge>
    {/each}
  </div>
</div>

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Skeleton } from "@/components/ui/skeleton"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight">CDS — Chainalysis Design System</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            All components pulled from the registry via <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">npx shadcn add @cds/theme</code>
          </p>
        </div>

        <Tabs defaultValue="components" className="space-y-8">
          <TabsList>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="data">Data Display</TabsTrigger>
          </TabsList>

          {/* ── Components Tab ── */}
          <TabsContent value="components" className="space-y-8">
            {/* Buttons */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Buttons</h2>
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="mt-3 flex flex-wrap gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </section>

            <Separator />

            {/* Badges */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Badges</h2>
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </section>

            <Separator />

            {/* Cards */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Cards</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Team Plan</CardTitle>
                    <CardDescription>For growing teams</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">$29<span className="text-sm font-normal text-muted-foreground">/mo</span></p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Get Started</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>MT</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">Monica Torres</CardTitle>
                        <CardDescription>Design Lead</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Last pushed tokens 2 hours ago</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Build Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Token transform</span>
                      <Badge variant="outline">Done</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Registry build</span>
                      <Badge>Running</Badge>
                    </div>
                    <Progress value={66} />
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Alert */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Alerts</h2>
              <div className="space-y-3">
                <Alert>
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>
                    These components were pulled from your deployed registry using npx shadcn add @acme/button.
                  </AlertDescription>
                </Alert>
                <Alert variant="destructive">
                  <AlertTitle>Breaking change</AlertTitle>
                  <AlertDescription>
                    The Button API has changed. Please update your imports.
                  </AlertDescription>
                </Alert>
              </div>
            </section>

            <Separator />

            {/* Skeleton */}
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Skeleton</h2>
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </section>
          </TabsContent>

          {/* ── Forms Tab ── */}
          <TabsContent value="forms" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Update your account preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Monica Torres" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="monica@acme.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell us about yourself..." />
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notifications</h3>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-notif">Email notifications</Label>
                    <Switch id="email-notif" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="slack-notif">Slack notifications</Label>
                    <Switch id="slack-notif" defaultChecked />
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">I agree to the terms of service</Label>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Confidence threshold</Label>
                  <Slider defaultValue={[75]} max={100} step={1} />
                  <p className="text-xs text-muted-foreground">Set the minimum confidence level for alerts</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-3">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* ── Data Tab ── */}
          <TabsContent value="data" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Deployments</CardTitle>
                <CardDescription>Registry builds triggered by token changes</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Commit</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Changes</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-mono text-sm">4da00f1</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">MT</AvatarFallback>
                          </Avatar>
                          Monica
                        </div>
                      </TableCell>
                      <TableCell>primary → blue-600, radius → full</TableCell>
                      <TableCell><Badge variant="outline">Deployed</Badge></TableCell>
                      <TableCell className="text-right text-muted-foreground">2h ago</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-sm">a1b2c3d</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">CT</AvatarFallback>
                          </Avatar>
                          Christian
                        </div>
                      </TableCell>
                      <TableCell>secondary → red-500</TableCell>
                      <TableCell><Badge variant="outline">Deployed</Badge></TableCell>
                      <TableCell className="text-right text-muted-foreground">5h ago</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-mono text-sm">e4f5g6h</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">MT</AvatarFallback>
                          </Avatar>
                          Monica
                        </div>
                      </TableCell>
                      <TableCell>Initial token setup</TableCell>
                      <TableCell><Badge>Building</Badge></TableCell>
                      <TableCell className="text-right text-muted-foreground">1d ago</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

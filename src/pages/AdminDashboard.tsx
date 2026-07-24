import { Helmet } from 'react-helmet-async';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BarChart3, Users, ClipboardList, ImagePlus } from 'lucide-react';

const stats = [
  { label: 'Bookings', value: '1,280' },
  { label: 'Packages', value: '24' },
  { label: 'Messages', value: '134' },
  { label: 'Reviews', value: '96' },
];

export function AdminDashboard() {
  return (
    <Container className="pt-28 pb-24">
      <Helmet>
        <title>Admin Dashboard | Amar Tours & Travels</title>
      </Helmet>

      <SectionHeading
        badge="Admin Dashboard"
        title="Dashboard overview for Amar Tours administrators"
        subtitle="Manage bookings, packages, testimonials and messages from a polished admin interface."
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <Card key={item.label} className="p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">{item.label}</p>
                <p className="mt-4 text-3xl font-semibold text-primary">{item.value}</p>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="p-8">
              <div className="flex items-center gap-4">
                <BarChart3 size={28} className="text-accent" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Analytics</p>
                  <p className="mt-2 text-xl font-semibold text-primary">Traffic and conversion insights</p>
                </div>
              </div>
            </Card>
            <Card className="p-8">
              <div className="flex items-center gap-4">
                <ClipboardList size={28} className="text-accent" />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Bookings</p>
                  <p className="mt-2 text-xl font-semibold text-primary">Manage guest requests</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-8">
            <div className="flex items-center gap-4">
              <Users size={28} className="text-accent" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Users</p>
                <p className="mt-2 text-xl font-semibold text-primary">Role-based access control</p>
              </div>
            </div>
          </Card>
          <Card className="p-8">
            <div className="flex items-center gap-4">
              <ImagePlus size={28} className="text-accent" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Gallery</p>
                <p className="mt-2 text-xl font-semibold text-primary">Upload images and manage media</p>
              </div>
            </div>
          </Card>
          <div className="rounded-[2rem] border border-border bg-surface p-8 shadow-glass dark:bg-surface-secondary dark:border-white/10">
            <p className="text-sm uppercase tracking-[0.3em] text-text-secondary">Admin actions</p>
            <div className="mt-6 grid gap-3">
              <Button variant="outline">Manage bookings</Button>
              <Button variant="outline">Manage packages</Button>
              <Button variant="outline">Manage testimonials</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

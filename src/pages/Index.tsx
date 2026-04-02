import { DashboardLayout } from "@/components/DashboardLayout";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const revenueData = [
  { month: "Ene", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 5000 },
  { month: "Abr", value: 4500 },
  { month: "May", value: 6000 },
  { month: "Jun", value: 5500 },
  { month: "Jul", value: 7000 },
];

const visitsData = [
  { day: "Lun", visitas: 2400 },
  { day: "Mar", visitas: 1398 },
  { day: "Mié", visitas: 3800 },
  { day: "Jue", visitas: 3908 },
  { day: "Vie", visitas: 4800 },
  { day: "Sáb", visitas: 3200 },
  { day: "Dom", visitas: 2100 },
];

const recentActivity = [
  { user: "Ana García", action: "Completó una compra", time: "Hace 2 min" },
  { user: "Carlos López", action: "Se registró", time: "Hace 15 min" },
  { user: "María Ruiz", action: "Actualizó su perfil", time: "Hace 1 hora" },
  { user: "José Martín", action: "Envió un reporte", time: "Hace 2 horas" },
  { user: "Laura Sánchez", action: "Canceló suscripción", time: "Hace 3 horas" },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Resumen general de tu plataforma
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Ingresos"
            value="$45,231"
            change="+20.1% vs mes anterior"
            changeType="positive"
            icon={DollarSign}
          />
          <StatCard
            title="Usuarios"
            value="2,350"
            change="+180 nuevos"
            changeType="positive"
            icon={Users}
          />
          <StatCard
            title="Pedidos"
            value="1,247"
            change="-3.2% vs mes anterior"
            changeType="negative"
            icon={ShoppingCart}
          />
          <StatCard
            title="Conversión"
            value="3.2%"
            change="Sin cambios"
            changeType="neutral"
            icon={TrendingUp}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          <Card className="lg:col-span-4 border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Ingresos mensuales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(230, 80%, 56%)" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="hsl(230, 80%, 56%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
                    <XAxis dataKey="month" stroke="hsl(220, 10%, 50%)" fontSize={12} />
                    <YAxis stroke="hsl(220, 10%, 50%)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(0, 0%, 100%)",
                        border: "1px solid hsl(220, 15%, 90%)",
                        borderRadius: "8px",
                        fontSize: "13px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="hsl(230, 80%, 56%)"
                      strokeWidth={2}
                      fill="url(#colorValue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 border-border/50 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Visitas por día</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={visitsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 90%)" />
                    <XAxis dataKey="day" stroke="hsl(220, 10%, 50%)" fontSize={12} />
                    <YAxis stroke="hsl(220, 10%, 50%)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(0, 0%, 100%)",
                        border: "1px solid hsl(220, 15%, 90%)",
                        borderRadius: "8px",
                        fontSize: "13px",
                      }}
                    />
                    <Bar dataKey="visitas" fill="hsl(160, 60%, 45%)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Actividad reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                      {item.user.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.user}</p>
                      <p className="text-xs text-muted-foreground">{item.action}</p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;

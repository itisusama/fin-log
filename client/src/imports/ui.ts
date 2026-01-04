import DashboardCard from "@/components/dashboard/dashboard-card";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import MainHeading from "@/components/shared/main-heading";
import UserMenu from "@/components/shared/user-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CardSlot from "@/layouts/slots/card-slot";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Modal } from "@/components/shared/Modal"
import CategoryCard from "@/components/dashboard/category-cards";

export const ui = {
    Button, MainHeading, Form, 
    FormField, FormItem, FormLabel, 
    FormControl, Input, Label,
    FormMessage, DropdownMenu, DropdownMenuTrigger,
    Avatar, AvatarFallback, DropdownMenuContent,
    DropdownMenuLabel, DropdownMenuItem, UserMenu,
    Separator, DashboardHeader, Card, 
    CardHeader, CardContent, CardTitle,
    DashboardCard, Dialog, Modal,
    CategoryCard
}

export const slot = {CardSlot}
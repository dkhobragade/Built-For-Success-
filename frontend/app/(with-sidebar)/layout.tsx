import Sidebar from "@/components/ui/Sidebar";
import { Box } from "@mui/material";

export default function SidebarLayout ( { children }: { children: React.ReactNode } )
{
    return (
        <Box className="flex">
            <Sidebar />
            <main className="flex-1">{ children }</main>
        </Box>
    );
}

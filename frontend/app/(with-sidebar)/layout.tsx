import Sidebar from "@/components/ui/Sidebar";
import { Box } from "@mui/material";

export default function SidebarLayout ( { children }: { children: React.ReactNode } )
{
    return (
        <Box className="flex h-screen">
            <Box className="h-screen sticky top-0">
                <Sidebar />
            </Box>
            <Box className="flex-1 overflow-y-auto">
                { children }
            </Box>
        </Box>
    );
}

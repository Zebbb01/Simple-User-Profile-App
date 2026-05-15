import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://goicbqmbwpemqeatxnlf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvaWNicW1id3BlbXFlYXR4bmxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MTkwNDMsImV4cCI6MjA5NDM5NTA0M30.g9xIcmgGgGT6HYP_vXi8xwLYr4GyPdd2HvFMCd18OTo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

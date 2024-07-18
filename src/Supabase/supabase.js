import {createClient} from '@supabase/supabase-js'

const supabase = createClient('https://zilocsrqvrdpvzdtdich.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppbG9jc3JxdnJkcHZ6ZHRkaWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExMDE3ODgsImV4cCI6MjAzNjY3Nzc4OH0.Pn0WRUVPlj5Yu7nIyfw1uUIGCCxxXVstncP28KQlFMU')

export {supabase}
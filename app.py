import streamlit as st
from processor import process_workbook

st.set_page_config(page_title="Excel Sales Report Cleaner", layout="centered")

st.title("📊 Excel Sales Report Cleaner")
st.write("Upload your monthly sales report. The app will clean, format, and summarize it.")

if "processed_file" not in st.session_state:
    st.session_state.processed_file = None

uploaded_file = st.file_uploader("Choose an Excel file", type=["xlsx"])

if uploaded_file and st.button("Process File"):
    with st.spinner("Processing..."):
        st.session_state.processed_file = process_workbook(uploaded_file)
    st.success("File processed successfully! Download below:")

if st.session_state.processed_file:
    st.download_button(
        label="📥 Download Cleaned File",
        data=st.session_state.processed_file,
        file_name=uploaded_file.name.replace(".xlsx", " (CLEANED).xlsx"),
        mime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )
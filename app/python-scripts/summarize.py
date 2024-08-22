import torch 
from transformers import T5Tokenizer, T5ForConditionalGeneration, T5Config

model = T5ForConditionalGeneration.from_pretrained('./textsum_model')
tokenizer = T5Tokenizer.from_pretrained('./textsum_tokenizer')
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

def summarize(text,ml):
    
    preprocess_text = text.strip().replace("\n","")
    t5_prepared_Text = "Text to summarize: "+preprocess_text
    
    tokenized_text = tokenizer.encode(t5_prepared_Text, return_tensors="pt").to(device)
    
    # summmarize
    summary_ids = model.generate(tokenized_text,
                                      num_beams=4,
                                      no_repeat_ngram_size=2,
                                      min_length=30,
                                      max_length=ml,
                                      early_stopping=True)

    output = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    print(output)
    return output